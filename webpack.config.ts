import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

//такой export необходим, чтобы передавать переменные окружения
export default (env: BuildEnv) => {

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
  });

  return config
};
