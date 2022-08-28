import { Form as RemixForm } from '@remix-run/react';
import type { FormMethod } from '@remix-run/react';

import type { FormField, FormSchema } from './types';
import { Field } from './Fields/Field';
import { Button } from '../Elements/Button';

type FormProps = {
  schema: FormSchema;
  method: FormMethod;
  busy: boolean;
  action?: string;
  error?: string;
};

export const Form = ({
  schema,
  busy = false,
  method,
  action,
  error
}: FormProps): JSX.Element => {
  return (
    <RemixForm method={method} action={action} className='m-auto'>
      {schema.fields?.map((field: FormField) => (
        <Field
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          disabled={busy}
          required={field.required}
        />
      ))}
      {schema.buttons?.map((button) => (
        <Button key={button.id} disabled={busy} type={button.type} width='full'>
          {button.label}
        </Button>
      ))}
      {error ? <p className='text-red-600'>{error}</p> : null}
    </RemixForm>
  );
};
