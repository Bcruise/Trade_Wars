export const UpdateAWS = (array) => {
    
    const AWS = require('aws-sdk');

    const credentials = new AWS.Credentials({
      accessKeyId: '',
      secretAccessKey: '+bvKsSmqFS+96v1x1E8'
    });
      
    // Set up AWS configuration
    AWS.config.update({
      region: 'your-region',
      credentials: credentials
    });
      
    const s3 = new AWS.S3();

    const fileKey = '../data/players.json';

    // Get the existing file content from S3
    s3.getObject({ Bucket: 'trade-wars', Key: fileKey }, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data)
        // Parse the existing file content
        const existingContent = JSON.parse(data.Body.toString());

        // Merge the existing content with the new array
        const updatedContent = existingContent.concat(array);

        // Convert the updated content to a JSON string
        const arrayContent = JSON.stringify(updatedContent);

        // Set up the parameters for the S3 put
        const params = {
        Bucket: 'trade-wars',
        Key: fileKey,
        Body: arrayContent,
        ContentType: 'application/json'
        };

        // Update the file in S3
        s3.putObject(params, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File updated successfully. Location: ${data.Location}`);
        }
        });
    }
    });
}


