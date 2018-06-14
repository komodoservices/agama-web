export const set = (name, json) => {
  const _json = JSON.stringify(json);

  localStorage.setItem(name, _json);
}

export const get = (name) => {
  const _var = localStorage.getItem(name);

  if (_var) {
    const _json = JSON.parse(_var);

    return _json;
  } else {
    return null;
  }
}