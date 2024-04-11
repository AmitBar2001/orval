/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { z as zod } from 'zod';

export const listPetsQueryParams = zod.object({
  "limit": zod.string().optional()
})

export const listPetsResponseItem = zod.object({
  "@id": zod.string().optional(),
  "id": zod.number().optional(),
  "name": zod.string().optional(),
  "tag": zod.string().optional(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
}).strict()
export const listPetsResponse = zod.array(listPetsResponseItem)


export const createPetsBodyItem = zod.object({
  "name": zod.string().optional(),
  "tag": zod.string().optional()
})
export const createPetsBody = zod.array(createPetsBodyItem)

export const createPetsResponse = zod.object({
  "@id": zod.string().optional(),
  "id": zod.number(),
  "name": zod.string(),
  "tag": zod.string().optional(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
}).strict()


export const updatePetsBody = zod.object({
  "@id": zod.string().optional(),
  "id": zod.number(),
  "name": zod.string(),
  "tag": zod.string().optional(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
})

export const updatePetsResponse = zod.object({
  "@id": zod.string().optional(),
  "id": zod.number(),
  "name": zod.string(),
  "tag": zod.string().optional(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
}).strict()


export const showPetByIdParams = zod.object({
  "petId": zod.string(),
  "testId": zod.string()
})

export const showPetByIdResponse = zod.object({
  "@id": zod.string().optional(),
  "id": zod.number(),
  "name": zod.string(),
  "tag": zod.string().optional(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
}).strict()

