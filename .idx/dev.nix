# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.python3
    pkgs.gh
    pkgs.gemini-cli
  ];
  # Sets environment variables in the workspace
  env = {};
  # Fast way to run commands without running a full shell
  scripts = {
    # "hello" = "echo Hello World";
  };
  # Binds a port from the VM to the editor
  # To learn more, see https://developers.google.com/idx/guides/customize-idx-env#bind-a-port
  ports = {};
  # Enables the specified language's VS Code extension and SDK
  languages = {
    # "python" = {
    #   "version" = "3.11";
    # };
  };
  # These settings will be applied to the VS Code workspace .vscode/settings.json file
  # To learn more, see https://developers.google.com/idx/guides/customize-idx-env#ide-settings
  workspace = {
    # "my-extension.my-setting" = "value";
  };
  # Installs the listed VS Code extensions.
  # To learn more, see https://developers.google.com/idx/guides/customize-idx-env#vscode-extensions
  extensions = [
    # "vscode.extension-id"
  ];
}
