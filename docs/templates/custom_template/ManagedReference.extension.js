// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

/**
 * This method will be called at the start of exports.transform in ManagedReference.html.primary.js
 */
exports.preTransform = function (model) {
  return model;
}

/**
 * This method will be called at the end of exports.transform in ManagedReference.html.primary.js
 */
exports.postTransform = function (model) {
  model.custom_overview = model.custom_overview || "";
  model.custom_details = model.custom_details || "";
  model.custom_examples = model.custom_examples || "";
  if (model.children) {
    model.children.forEach(function (item) {
      model.custom_overview = model.custom_overview || "";
      model.custom_details = model.custom_details || "";
      model.custom_examples = model.custom_examples || "";
    });
  }
  return model;
}
