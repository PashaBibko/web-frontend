#!/bin/bash

# Clears any previous information from the console #
clear

# Hosts a python built-in HTTP server #
echo "Starting local web server on port 8888..."
python3 -m http.server 8888
