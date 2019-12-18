class Tower {
  ids: any;
  watchers: any;
  typeMap: any;
  size: number;
  constructor() {
    this.ids = {};
    this.watchers = {};
    this.typeMap = {};
    this.size = 0;
  }

  /**
   * Add an object to tower
   */
  add(obj: any) {
    var id = obj.id;
    var type = obj.type;

    this.ids[id] = id;

    if (!!obj.type) {
      this.typeMap[type] = this.typeMap[type] || {};
      if (this.typeMap[type][id] === id)
        return false;

      this.typeMap[type][id] = id;
      this.size++;
      return true;
    } else {
      return false;
    }
  };

  /**
   * Add watcher to tower
   */
  addWatcher(watcher: any) {
    var type = watcher.type;
    var id = watcher.id;

    if (!!type) {
      this.watchers[type] = this.watchers[type] || {};
      this.watchers[type][id] = id;
    }
  };

  /**
   * Remove watcher from tower
   */
  removeWatcher(watcher: any) {
    var type = watcher.type;
    var id = watcher.id;

    if (!!type && !!this.watchers[type]) {
      delete this.watchers[type][id];
    }
  };

  /**
   * Get all watchers by the given types in this tower
   */
  getWatchers(types: any[]) {
    var result: any = {};

    if (!!types && types.length > 0) {
      for (var i = 0; i < types.length; i++) {
        var type = types[i];
        if (!!this.watchers[type]) {
          result[type] = this.watchers[type];
        }
      }
    }

    return result;
  };

  /**
   * Remove an object from this tower
   */
  remove(obj: any) {
    var id = obj.id;
    var type = obj.type;

    if (!!this.ids[id]) {
      delete this.ids[id];

      if (!!type)
        delete this.typeMap[type][id];
      this.size--;
    }
  };

  /**
   * Get all object ids in this tower
   */
  getIds(): any {
    return this.ids;
  }

  /**
   * Get object ids of given types in this tower
   */
  getIdsByTypes(types: any[]): any {
    var result: any = {};
    for (var i = 0; i < types.length; i++) {
      var type = types[i];
      if (!!this.typeMap[type])
        result[type] = this.typeMap[type];
    }

    return result;
  };

}

function create() {
  return new Tower();
}

export default { create }
