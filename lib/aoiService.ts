import towerAOI from "./towerAOI/towerAOI";
import Vec2 from "./vec2";

/**
 * AOI Service interface
 * @param config {Object} aoi config
 */
class AOIService {
  aoi: any;
  constructor(config: any) {
    if (!!config.aoi) {
      this.aoi = config.aoi.getService(config);
    } else {
      this.aoi = towerAOI.getService(config);
    }
  }

  /**
   * Get all object ids by given pos and range
   * @param pos {Object} {x: x pos, y: y pos}
   * @param range {Number} the range to find
   * @return {Array} the object ids
   */
  getIdsByPos(pos: any, range: number) {
    return this.aoi.getIdsByPos(pos, range);
  }

  /**
   * Get all boject ids by given pos , range , types
   * @param pos {Object} {x: x pos, y: y pos} The pos of the object
   * @param types {Array} The object types need to find
   * @param range {Number} the range to find ids
   */
  getIdsByRange(pos: Vec2, range: number, types: any[]) {
    return this.aoi.getIdsByRange(pos, range, types);
  }

  /**
   * Add object to aoi module
   * @param obj {Object}
   * @param pos {Object} {x: x pos, y: y pos} The pos of the object
   * @return {Boolean} add object result
   */
  addObject(obj: any, pos: Vec2): boolean {
    return this.aoi.addObject(obj, pos);
  }

  /**
   * Remove object from aoi module
   * @param obj {Object}
   * @param pos {Object} {x: x pos, y: y pos} The pos of the object
   * @return {Boolean} add object result
   */
  removeObject(obj: any, pos: Vec2): boolean {
    return this.aoi.removeObject(obj, pos);
  }

  /**
   * Update object in aoi module
   * @param obj {Object}
   * @param pos {Object} {x: x pos, y: y pos} The pos of the object
   * @return {Boolean} add object result
   */
  updateObject(obj: any, oldPos: Vec2, newPos: Vec2): boolean {
    return this.aoi.updateObject(obj, oldPos, newPos);
  }

  /**
   * Get watchers for given types
   */
  getWatchers(pos: Vec2, types: any[]) {
    return this.aoi.getWatchers(pos, types);
  }

  /**
   * Add watcher to aoi module
   */
  addWatcher(watcher: any, pos: Vec2, range: number) {
    return this.aoi.addWatcher(watcher, pos, range);
  }

  /**
   * remove watcher for pos and range
   */
  removeWatcher(watcher: any, pos: Vec2, range: number) {
    return this.aoi.removeWatcher(watcher, pos, range);
  }

  /**
   * update watcher
   */
  updateWatcher(watcher: any, oldPos: Vec2, newPos: Vec2, oldRange: number, newRange: number) {
    return this.aoi.updateWatcher(watcher, oldPos, newPos, oldRange, newRange);
  }
}

/**
 * get aoi service
 */
function getService(config: any) {
  return new AOIService(config);
}

export default { getService };