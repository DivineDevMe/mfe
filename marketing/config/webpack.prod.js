const {merge}  = require('webpack-merge');
const ModuleFederationsPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
     mode:'production', 
     output:{
        filename: '[name].[contenthash].js',
     },
     plugins:[
         new  ModuleFederationsPlugin({
             name:'marketing',
             filename:'remoteEntry.js',
             exposes:{
                 './MarketingApp':'./src/bootstrap'
             },
             shared: packageJson.dependencies
         }),
         
        ]

};

module.exports = merge(commonConfig,prodConfig);    