#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloWorldCdkLambdaStack } from '../lib/hello_world_cdk_lambda_stack';

const app = new cdk.App();
new HelloWorldCdkLambdaStack(app, 'CdkStack');
