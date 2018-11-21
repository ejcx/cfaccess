'use strict';
const test = require('ava');
const verify = require('./');

test(async t => {
  let token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1MDRjNjQ4MGZkNjFkYTliNzg3YzI0ODVmMzg5NDVjZDlmZjAxODI1MzkxYzdiNWY1NmVmZDkxNjliYjZjNDQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiODIzYzMxOWUxZWMxNmMwMWNiMjJmODcwNTJiYTEzYTQ0OTA5YTAxN2U3Mzc0NTE0ZDQzMTk4MWU0NGMwNDY2ZCJdLCJlbWFpbCI6ImV2YW5AdHdpaW5zZW4uY29tIiwiZXhwIjoxNTQyOTA4MjQ0LCJpYXQiOjE1NDI4MjE4NDUsImlzcyI6Imh0dHBzOi8vZWpqaW8uY2xvdWRmbGFyZWFjY2Vzcy5jb20iLCJub25jZSI6IjQxMDJjZTkyYmY3YzNkNjE1MWNhNDFiN2FmMjE3MjUyYTBmOWU1Yzc4MzFjOTJkMGNiOGQzNTA3Njk5NDg4MDUiLCJzdWIiOiI5YzE3NWM0MS03NWU5LTQ1ODctYWU2MC03ZDM5NjM5Y2RiMzcifQ.LS3feeHtzjH1SNxUpTLac9aSqHYjSyOgHWIeJFa8n9g08s8JO--xz-H9x18u9VhvQPmkJPCgp1wvP9D9_R_MM-3NaRjQPDr-cVE_NCqabYFGatq6vGCczjuyOJ22pzhOy5ONZA4di6uRS22xEJ-Zu_uI2VQirrDe8sy1bPkUWGpCzfLw7gcl2-KrtuqxjhSp-qfEaMS7PVChmdH_O2-W0oIlF1jYSo7NsiFyNfjDk4nBu3moFCmMFLazdqx-szvS-iHDtR67oBcRc3YU-qKDgHMmc6mVnM94ifpo2DSQSHvfVX2u2vs3THMd5NWoeufwNxjrj3leJV4NpIIZAP8zHg';
  let audience = '55d90f4d23cad78754bca6571f1158f25043cc20626f02b76d2f3bbda1499e5f';
  let issuer = 'https://ejjio.cloudflareaccess.com';
  let kids = [
    '5504c6480fd61da9b787c2485f38945cd9ff01825391c7b5f56efd9169bb6c44',
    'facb70eaf23a06573eb449601e345b8d2de562fb943de556d2cfda34870f7629'
  ];

  let decoded = await verify(token, audience, issuer, kids);
  let expected = false;

  t.is(decoded, expected);
});
