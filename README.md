# SCTK-serverless

Use the following commands to update the AWS remote:

```
zip -r function.zip .

aws lambda update-function-code --function-name SCTK-v3 --zip-file fileb://function.zip
```

> **Note**: the AWS secrets must be available. Refer to the [AWS docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html) for more information.

[AWS Console - Lambda](https://eu-west-2.console.aws.amazon.com/lambda/home?region=eu-west-2#/functions/SCTK-v3?tab=code)
