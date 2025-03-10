import { useState, ChangeEvent } from 'react';
import { CREATE_USER } from '../../Hooks/Mutation/useCreateUser';
import { ApolloError, useMutation } from '@apollo/client';
import IUser from 'Interfaces/IUser';

export default function InscriptionForm(): JSX.Element {
  // States
  const [formState, setFormState] = useState<IUser>({
    name: '',
    email: '',
    hashedPassword: '',
  });

  const [addUser, { data, loading, error }] = useMutation(CREATE_USER);

  // Functions

  const RenderError = ({ err }: ApolloError | any): JSX.Element => {
    return (
      <div>
        <h1>Error in User creation :/</h1>
        {err ? <p>{err.message}</p> : <p>"No error msg"</p>}
        <button
          onClick={() => window.location.replace(window.location.toString())}
        >
          {'<-'}
        </button>
      </div>
    );
  };

  const RenderLoading = (): JSX.Element => {
    return <h1>Loading...</h1>;
  };

  // Render
  if (error) {
    return <RenderError err={error} />;
  }
  if (loading) {
    return <RenderLoading />;
  }
  return (
    <div>
      <form
        className="w-full"
        onSubmit={async (e) => {
          e.preventDefault();
          await addUser({
            variables: {
              name: formState.name,
              email: formState.email,
              hashedPassword: formState.hashedPassword,
            },
          });
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-2/3 flex flex-col py-2">
            <label className="pb-1">Name</label>
            <input
              id="name"
              className="border border-gray-400 rounded p-1"
              value={formState.name}
              placeholder="Your Name"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormState({
                  ...formState,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-2/3 flex flex-col py-2">
            <label className="pb-1">Email</label>
            <input
              id="email"
              className="border border-gray-400 rounded p-1"
              value={formState.email}
              placeholder="📧 you@example.com"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormState({
                  ...formState,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-2/3 flex flex-col py-2">
            <label className="pb-1">Password</label>
            <input
              id="password"
              className="border border-gray-400 rounded p-1"
              value={formState.hashedPassword}
              placeholder="🔑"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormState({
                  ...formState,
                  hashedPassword: e.target.value,
                  //TODO: why confirm if the second input do nothing ?
                });
              }}
            />
          </div>
          <div className="w-2/3 flex flex-col py-2">
            <label className="pb-1">Confirm Password</label>
            <input
              id="redopassword"
              className="border border-gray-400 rounded p-1"
              placeholder="🗝️"
            />
          </div>
          <div className="w-2/3 flex flex-col pt-8">
            <button
              id="send"
              type="submit"
              className="border border-gray-400 p-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
