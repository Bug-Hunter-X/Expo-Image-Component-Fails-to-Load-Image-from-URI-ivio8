# Expo Image Component URI Loading Issue

This repository demonstrates a common issue when using the Expo `Image` component with a URI: the image fails to load due to an incorrect or inaccessible URI. The solution involves verifying the URI's accuracy and ensuring the image has appropriate access permissions.

## Bug

The `bug.js` file contains code that attempts to load an image from a URI that may be incorrect or inaccessible. This results in a blank space where the image should appear.

## Solution

The `bugSolution.js` file provides a corrected version of the code, demonstrating how to verify the URI and ensure the image is accessible.  It also showcases error handling to gracefully manage load failures.