/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';


// Babel looks for this env var to determine how its built.
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production'))

webpack(webpackConfig).run((err, stats) => {
    if(err){
      // fatal error so stop
      console.log(chalk.red(err)); 
      return 1; 
    }
    
    const jsonStats = stats.toJson();

    if(jsonStats.hasError){
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
    
    if(jsonStats.hasWarnings){
        console.log(chalk.red('Webpack has generated the following warnings'));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
        
    }

    console.log(`Webpack stats: ${stats}`);

    // Build has succeeded
    console.log(chalk.green('App built for prod and written to /dist'));

    return 0;
})