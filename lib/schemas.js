/*
Copyright 2019 Expedia Group, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const Joi = require('@hapi/joi')

const manifestSchema = Joi.object().keys({
  server: Joi.object(),
  register: Joi.object()
})

const defaults = {
  environment: { env: process.env },
  shortstopHandlers: {}
}

const optionsSchema = Joi.object({
  userConfigPath: Joi.string(),
  baseDir: Joi.string(),
  onConfig: Joi.func(),
  environment: Joi.object().default(defaults.environment),
  shortstopHandlers: Joi.object().default(defaults.shortstopHandlers)
}).default(defaults)

module.exports = { manifestSchema, optionsSchema }
