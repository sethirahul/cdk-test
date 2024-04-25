#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MultistackStack } from '../lib/multistack-stack';

const app = new cdk.App();

new MultistackStack(app, "MyWestCdkStack", {

    encryptBucket: false
});

new MultistackStack(app, "MyEastCdkStack", {

    encryptBucket: true
});

app.synth();