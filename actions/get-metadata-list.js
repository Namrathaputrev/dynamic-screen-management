const httpError = require("http-errors");
class FetchMetadataList {
  constructor(module_name, screen_name) {
    this.module_name = module_name;
    this.screen_name = screen_name;
  }

  async execute() {
    try {
      let module_contents = require(`../src/specification/${this.module_name}/${this.screen_name}.json`);
      if (module_contents) return module_contents;
      else return [];
    } catch (err) {
      throw new httpError(400, `Module/Screen not found!`);
    }
  }
}
exports.FetchMetadataList = FetchMetadataList;
