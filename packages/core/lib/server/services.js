/**
 * Created by thomas on 17/03/16.
 */

var settings = Meteor.settings.private;

ServiceConfiguration.configurations.upsert(
    {service: 'linkedin'},
    {
        $set: {
            appId: settings.Linkedin.appId,
            secret: settings.Linkedin.secret
        }
    }
);

ServiceConfiguration.configurations.upsert(
    {service: 'facebook'},
    {
        $set: {
            appId: settings.Facebook.appId,
            secret: settings.Facebook.secret
        }
    }
);

ServiceConfiguration.configurations.upsert(
    {service: 'twitter'},
    {
        $set: {
            consumerKey: settings.Twitter.consumerKey,
            secret: settings.Twitter.secret
        }
    }
);