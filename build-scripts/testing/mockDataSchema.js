export const schema = {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        properties: {
          id: {
            $ref: '#/definitions/positiveInt'
          },
        },
        required: ['id']
      }
    },
    required: ['user'],
    definitions: {
      positiveInt: {
        type: 'integer',
        minimum: 0,
        exclusiveMinimum: true
      }
    }
  };