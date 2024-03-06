const myEnum = {
  CODE_SLOGEN: "<<Eat, Sleep and Code.>>",

};


const enumFunc = {
  LOG: (...params) => {
    console.log("<<========================================>>", ...params)
  }
}

module.exports = {
  ...myEnum,
  ...enumFunc
};
