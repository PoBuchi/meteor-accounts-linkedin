if (Package['accounts-ui'] && !Package.hasOwnProperty('linkedin-config-ui')) {
  console.warn(
    "Note: You're using accounts-ui and accounts-linkedin,\n" +
    "but didn't install the configuration UI for the LinkedIn\n" +
    "OAuth. You can install it with:\n" +
    "\n" +
    "    meteor add linkedin-config-ui" +
    "\n"
  );
}
