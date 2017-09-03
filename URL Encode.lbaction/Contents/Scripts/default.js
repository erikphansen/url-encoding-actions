function run(argument) {
    if (argument == undefined) {
        LaunchBar.alert('No argument was passed to the action');
    } else {
        return [{
          title: `${encodeURIComponent(argument)}`,
          subtitle: `Original: ${argument}`,
          badge: `URL ENCODED`
        }];
    }
}
