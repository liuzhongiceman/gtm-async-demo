import * as loadjs from 'loadjs';

/* @ngInject */
export class ScriptLoader {
  constructor(private $q: angular.IQService) { }

  public load(paths: string | string[]) {
    const done = this.$q.defer<void>();
    loadjs(paths, {
      error: pathsMissing => done.reject(pathsMissing),
      success: () => done.resolve(),
    });
    return done.promise;
  }
}