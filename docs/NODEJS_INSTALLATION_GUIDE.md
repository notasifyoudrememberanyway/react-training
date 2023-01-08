# NodeJS Installation Guide

## MacOS installation using NVM

- Open your terminal. NOTE: you can open your terminal from the Spotlight tool by searching for Terminal or you can open your terminal from the Applications folder)
- Paste this command in your terminal and hit Enter `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
- The above command will download Node Version Manager (NVM) or update NVM if you already have it installed
- Enter the command `nvm install --lts` which will download the Long-Term Support (stable) version of NodeJS and set it as your default NodeJS version
- NOTE: You might see an error `command not found: nvm` and this is because the terminal application does not recognise the command `nvm` even though you have installed it. Close your terminal and re-open it and type `nvm --version` and if you still get the same error then add the following lines of code to your `~/.zshrc` file if it exists. If the file does not exist then `touch ~/.zshrc` which will create the file. Open the file and copy and paste the code snippet below which will instruct your terminal on how to run the `nvm` commands when you type it in the terminal:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

- Enter the command `node --version` which will print out the current version of NodeJS (should be something like 18.x.x)
- All done!!

## Windows installation using installer

- Go the [downloads page](https://nodejs.org/en/download/)
- Select the LTS version and select 32-bit or 64-bit according to your laptop specifications and download the windows installer version
- Once the download is complete follow the steps from the installer
- After the installation is successful, open your terminal and enter the command `node --version` which will print out the current version of NodeJS (should be something like 18.x.x)

- All done!!
