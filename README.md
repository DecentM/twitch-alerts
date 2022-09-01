# Twitch live check action

## About

This repo template sets up a scheduled task that checks if a Twitch channel is
live or not. If the status has changed since the last check, it sends a Discord
notification.

## Setup

1. Create a repository from this template by clicking the green `Use this template` button
2. Go to the [Twitch developer console](https://dev.twitch.tv/console/apps) and
   create a new application. Use `http://localhost` for the redirect URI.
3. Once created, click `Manage` next to the new application, and copy the client ID.
4. On a new tab, go to your repository and click `Settings` > `Security` > `Secrets` > `Actions`
5. Click `New repository secret`, then type `CLIENT_ID` in the Name field. Paste
   the copied string from step 3 into the value field, then click `Add secret`.
6. Back in the Twitch developer console, click `New secret`, then copy the resulting value.
7. On GitHub, click `New repository secret`, then type `CLIENT_SECRET` into the Name field. Paste the copied value from step 6 into the value field, then click `Add secret`.
8. Like before, add a new secret named `CHANNEL`, and type the name of the channel you want to get pings for into the value field, then click `Add secret`.
9. Create a webhook in your Discord server on the channel you want the pings to show up in. Copy the webhook.
10. Add the last, 4th secret named `DISCORD_WEBHOOK`, and paste the value of the webhook you copied from Discord during step 9 into the value field.
11. Done! Your webhook will be triggered when the channel goes live, or goes offline. You can also manually trigger the check by going to `Actions` > `check` and clicking `Run workflow`
