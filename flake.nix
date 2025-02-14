{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };

        nativeBuildInputs = with pkgs; [
          bun
          nodePackages_latest.nodejs
          prettierd
          eslint_d
        ];
        buildInputs = nativeBuildInputs;
      in
      {
        devShells.default = pkgs.mkShell { inherit nativeBuildInputs buildInputs; };
      }
    );

}
