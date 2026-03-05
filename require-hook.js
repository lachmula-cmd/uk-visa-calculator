/**
 * Node.js require hook — normalises Windows drive-letter casing.
 *
 * On Windows, the same physical file can be required via two different
 * path strings that differ only in drive-letter case (C:\ vs c:\).
 * Node.js uses the path string as the module-cache key, so it ends up
 * loading two separate instances of the same module (most critically
 * React), which breaks hooks with "Cannot read properties of null
 * (reading 'useContext')".
 *
 * This hook patches Module._resolveFilename so every resolved path is
 * normalised to a lowercase drive letter before it enters the cache.
 */
const Module = require("module");
const originalResolve = Module._resolveFilename.bind(Module);

Module._resolveFilename = function (request, parent, isMain, options) {
  const resolved = originalResolve(request, parent, isMain, options);
  // Normalise "C:\..." → "c:\..." so the module cache key is consistent.
  if (typeof resolved === "string") {
    return resolved.replace(/^[A-Z]:\\/, (m) => m.toLowerCase());
  }
  return resolved;
};
