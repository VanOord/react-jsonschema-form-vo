import arrays from "./arrays";
import anyOf from "./anyOf";
import oneOf from "./oneOf";
import allOf from "./allOf";
import enumObjects from "./enumObjects";
import nested from "./nested";
import numbers from "./numbers";
import simple from "./simple";
import widgets from "./widgets";
import ordering from "./ordering";
import references from "./references";
import custom from "./custom";
import errors from "./errors";
import examples from "./examples";
import large from "./large";
import date from "./date";
import validation from "./validation";
import files from "./files";
import single from "./single";
import customArray from "./customArray";
import customObject from "./customObject";
import alternatives from "./alternatives";
import propertyDependencies from "./propertyDependencies";
import schemaDependencies from "./schemaDependencies";
import additionalProperties from "./additionalProperties";
import propertyNames from "./propertyNames";
import nullable from "./nullable";
import nullField from "./null";
import errorSchema from "./errorSchema";
import defaults from "./defaults";

export const samples = {
  Simple: simple,
  Nested: nested,
  Arrays: arrays,
  Numbers: numbers,
  Widgets: widgets,
  Ordering: ordering,
  References: references,
  Custom: custom,
  Errors: errors,
  Examples: examples,
  Large: large,
  "Date & time": date,
  Validation: validation,
  Files: files,
  Single: single,
  "Custom Array": customArray,
  "Custom Object": customObject,
  Alternatives: alternatives,
  "Property dependencies": propertyDependencies,
  "Schema dependencies": schemaDependencies,
  "Additional Properties": additionalProperties,
  "Property Names": propertyNames,
  "Any Of": anyOf,
  "One Of": oneOf,
  "All Of": allOf,
  "Enumerated objects": enumObjects,
  "Null fields": nullField,
  Nullable: nullable,
  ErrorSchema: errorSchema,
  Defaults: defaults,
};
