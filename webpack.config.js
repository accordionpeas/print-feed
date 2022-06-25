const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

const common = (env) => {
  return {
    mode:  env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'cheap-module-source-map',

    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    },

    watchOptions: {
      ignored: ['node_modules', 'build'],
    },
  }
}

const client = (env) => {
  return {
    name: 'client',
    target: 'web',
    
    entry: {
      app: './src/public/index.tsx',
    },

    output: {
      path: path.join(__dirname, 'build/public'),
      filename: '[name].js',
      publicPath: '/',
    },
  }
}

const server = (env) => {
  return {
    name: 'server',
    target: 'node',

    externals: [nodeExternals()],

    entry: {
      app: './src/server/index.ts',
    },

    output: {
      path: path.join(__dirname, 'build/server'),
      filename: 'index.js',
      publicPath: '/',
    },

    ...!env.production && {
      plugins: [
        new NodemonPlugin(),
      ],
    },
  }
}

module.exports = env => {
  return [
    {
      ...common(env),
      ...client(env),
    },
    {
      ...common(env),
      ...server(env),
    }
  ]
}
