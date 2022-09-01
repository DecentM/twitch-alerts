import { ClientCredentialsAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";

const channel = process.env.CHANNEL;

const main = async () => {
  const auth = new ClientCredentialsAuthProvider(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );

  const client = new ApiClient({ authProvider: auth });

  const result = await client.streams.getStreamByUserName({
    name: channel,
  });

  if (result === null) {
    throw new Error(`${channel} is offline`);
  }
};

main()
  .then(() => {
    console.log(`${channel} is live`);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
