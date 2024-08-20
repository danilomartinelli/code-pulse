'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { User } from '@prisma/client';
import { CompleteUser, updateUserParams } from '@/lib/database/schemas/user';

type ProfileFormProps = {
  user: Pick<User, 'name' | 'email'>;
  onUpdate: (name: string) => Promise<CompleteUser | null>;
};

// At the form level, we extend the updateUserParams schema to include the name field as required.
// This is because we want to ensure that the name field is always present when updating a user.
// We then infer the type of the schema to create a ProfileFormSchema type.
// The email field is read only and cannot be updated at the api level.
// But we still include it in the form to display the user's email as a reference.
const profileFormSchema = updateUserParams.extend({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email(),
});

type ProfileFormSchema = z.infer<typeof profileFormSchema>;

const ProfileForm = ({ user, onUpdate }: ProfileFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormSchema>({
    mode: 'onChange',
    resolver: zodResolver(updateUserParams),
    defaultValues: {
      name: user.name ?? '',
      email: user.email,
    },
  });

  const onSubmit = async (values: ProfileFormSchema) => {
    setIsLoading(true);
    await onUpdate(values.name);
    setIsLoading(false);
  };

  useEffect(() => {
    const currentName = form.getValues('name');
    const currentEmail = form.getValues('email');

    if (currentName !== user.name || currentEmail !== user.email) {
      form.reset({ name: user.name ?? '', email: user.email });
    }
  }, [user, form]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={true}
                  placeholder="Email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
