import jQuery from "jquery";

export async function jqueryAjax(url, method, params, fn, errFn) {
  if (!url) return;

  try {
    const res = await jQuery.ajax({
      url: url,
      method: method || "GET",
      data: params || null,
      dataType: "json"
    });
    if (fn) fn(res)
    return res
  } catch (e) {
    console.log('Ajax Error:', e)
    if (errFn) errFn(e.responseJSON)
  }
}