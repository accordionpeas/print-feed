import { useCallback, useEffect, useRef } from 'react'
import { IFeedVariables } from '../../queries/feed'

interface IUseInfiniteScroll {
  currentPage: number
  loading: boolean
  fetchMore: (args: { variables: IFeedVariables }) => void
}

export const useInfiniteScroll = ({ currentPage, loading, fetchMore }: IUseInfiniteScroll) => {
  const loadMoreTarget = useRef<HTMLDivElement | null>(null)

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries[0]?.isIntersecting
      const shouldLoadMore = isIntersecting && !loading

      if (shouldLoadMore) {
        fetchMore({
          variables: {
            page: currentPage + 1,
          },
        })
      }
    },
    [currentPage, loading]
  )

  const observerRef = useRef<IntersectionObserver>()

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    if (loadMoreTarget.current) {
      observerRef.current = new IntersectionObserver(callback)
      observerRef.current.observe(loadMoreTarget.current)
    }
  }, [loadMoreTarget, callback])

  return loadMoreTarget
}
