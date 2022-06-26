import { useCallback, useEffect, useRef } from 'react'
import { IFeedVariables } from '../../queries/feed'

interface IUseInfiniteScroll {
  currentPage: number
  loading: boolean
  error: boolean
  fetchMore: (args: { variables: IFeedVariables }) => void
}

export const useInfiniteScroll = ({ currentPage, loading, error, fetchMore }: IUseInfiniteScroll) => {
  // use as ref at bottom of component tree
  const loadMoreTarget = useRef<HTMLDivElement | null>(null)

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries[0]?.isIntersecting
      const shouldLoadMore = isIntersecting && !loading

      if (shouldLoadMore && !error) {
        fetchMore({
          variables: {
            page: currentPage + 1,
          },
        })
      }
    },
    [currentPage, loading, error]
  )

  const observerRef = useRef<IntersectionObserver>()

  useEffect(() => {
    if (observerRef.current) {
      // disconnect so that the callback does not fire multiple times
      observerRef.current.disconnect()
    }

    if (loadMoreTarget.current) {
      observerRef.current = new IntersectionObserver(callback)
      observerRef.current.observe(loadMoreTarget.current)
    }
  }, [loadMoreTarget, callback])

  return loadMoreTarget
}
