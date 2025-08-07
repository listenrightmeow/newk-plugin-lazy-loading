import { ReplrodOptimizationPlugin } from '@listenrightmeow/replrod/plugin/OptimizationPlugin';
import { LazyLoadingOptimizer } from './LazyLoadingOptimizer.js';

const plugin: ReplrodOptimizationPlugin = {
  metadata: {
    name: '@listenrightmeow/replrod-plugin-lazy-loading',
    version: '1.0.0',
    description: 'Lazy loading components and utilities for replrod',
    author: '@listenrightmeow',
    expectedImprovement: 'Faster interactivity through lazy loading'
  },
  optimization: new LazyLoadingOptimizer(),
  
  async onLoad() {
    console.debug('Lazy loading optimization plugin loaded');
  },
  
  async onUnload() {
    console.debug('Lazy loading optimization plugin unloaded');
  }
};

export default plugin;
export { plugin };