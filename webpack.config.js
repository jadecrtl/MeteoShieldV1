const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // Module Node.js pour travailler avec les chemins de fichiers

module.exports = {
  entry: './index.js', // Point d'entrée principal de votre application
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour les fichiers compilés
    filename: 'bundle.js', // Nom du fichier de sortie
    publicPath: '/', // Chemin public pour accéder aux fichiers
  },
  mode: 'development', // Mode par défaut : peut être 'development' ou 'production'
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpiler les fichiers JS et JSX
        exclude: /node_modules/, // Exclure le dossier node_modules
        use: {
          loader: 'babel-loader', // Utilise Babel pour transpiler
        },
      },
      {
        test: /\.css$/, // Gestion des fichiers CSS
        use: ['style-loader', 'css-loader'], // Charge les styles dans le DOM
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Gestion des images
        type: 'asset/resource', // Déplace les fichiers vers le dossier de sortie
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Résolution des extensions de fichiers
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Dossier à servir
    },
    port: 3000, // Port pour le serveur local
    historyApiFallback: true, // Permet la navigation SPA (Single Page Application)
    open: true, // Ouvre le navigateur automatiquement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Fichier HTML de base
    }),
  ],
};
