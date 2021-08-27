const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: `## Intro
This project uses node.js and inquirer to generate a read me file for the user.

## Table of Contents
- [Usage](#Usage)
- [License](#License)
- [Installation](#Installation)
- [Tests](#Tests)
- [Questions](#Questions) 

## Installation
To use properly install node.js and inquirer using npm init on the commanad line.

## Usage
After installing node.js and inquirer, type npm run start to generate your own readme file or npm run test to generate a sample file. Both commands will change the README.md file on the top level.

- [Video Walkthrough Link](https://drive.google.com/file/d/14Xp81XYEelbSF0C5BQvityCplsy2CpBQ/view)
- [Video Sample Answers/Test Walkthrough Link](https://drive.google.com/file/d/1v14GtsUdLxzKDnR4hvorPIXRSEDftV0i/view)

## License
This project is using a [Creative Commons](https://choosealicense.com/licenses/cc0-1.0/) license.   

## Tests
Type npm run test into the command line to test this program after installation.

## Questions
[My GitHub](github.com/outOfThePark)
For any questions, feel free to email me at [redacted].`,
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: `## Intro
## Subtitle I

Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye. 

And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything. 

## Subtitle II

Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new. 

An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex. 

Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell. Hastened admitted joy nor absolute gay its. Extremely ham any his departure for contained curiosity defective. Way now instrument had eat diminution melancholy expression sentiments stimulated. One built fat you out manor books. Mrs interested now his affronting inquietude contrasted cultivated. Lasting showing expense greater on colonel no. 

Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one. 

Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten. 

## Subtitle III

Do am he horrible distance marriage so although. Afraid assure square so happen mr an before. His many same been well can high that. Forfeited did law eagerness allowance improving assurance bed. Had saw put seven joy short first. Pronounce so enjoyment my resembled in forfeited sportsman. Which vexed did began son abode short may. Interested astonished he at cultivated or me. Nor brought one invited she produce her. 

Are own design entire former get should. Advantages boisterous day excellence boy. Out between our two waiting wishing. Pursuit he he garrets greater towards amiable so placing. Nothing off how norland delight. Abode shy shade she hours forth its use. Up whole of fancy ye quiet do. Justice fortune no to is if winding morning forming. 

Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgence one own you inquietude sympathize. `,
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: `## Intro
## Subtitle I

Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye. 

And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything. 

## Subtitle II

Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new. 

An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex. 

Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell. Hastened admitted joy nor absolute gay its. Extremely ham any his departure for contained curiosity defective. Way now instrument had eat diminution melancholy expression sentiments stimulated. One built fat you out manor books. Mrs interested now his affronting inquietude contrasted cultivated. Lasting showing expense greater on colonel no. 

Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one. 

Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten. 

## Subtitle III

Do am he horrible distance marriage so although. Afraid assure square so happen mr an before. His many same been well can high that. Forfeited did law eagerness allowance improving assurance bed. Had saw put seven joy short first. Pronounce so enjoyment my resembled in forfeited sportsman. Which vexed did began son abode short may. Interested astonished he at cultivated or me. Nor brought one invited she produce her. 

Are own design entire former get should. Advantages boisterous day excellence boy. Out between our two waiting wishing. Pursuit he he garrets greater towards amiable so placing. Nothing off how norland delight. Abode shy shade she hours forth its use. Up whole of fancy ye quiet do. Justice fortune no to is if winding morning forming. 

Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgence one own you inquietude sympathize. `,
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_body: `## Intro
This project uses node.js and inquirer to generate a read me file for the user.

## Table of Contents
- [Usage](#Usage)
- [License](#License)
- [Installation](#Installation)
- [Tests](#Tests)
- [Questions](#Questions) 

## Installation
To use properly install node.js and inquirer using npm init on the commanad line.

## Usage
After installing node.js and inquirer, type npm run start to generate your own readme file or npm run test to generate a sample file. Both commands will change the README.md file on the top level.

- [Video Walkthrough Link](https://drive.google.com/file/d/14Xp81XYEelbSF0C5BQvityCplsy2CpBQ/view)
- [Video Sample Answers/Test Walkthrough Link](https://drive.google.com/file/d/1v14GtsUdLxzKDnR4hvorPIXRSEDftV0i/view)

## License
This project is using a [Creative Commons](https://choosealicense.com/licenses/cc0-1.0/) license.   

## Tests
Type npm run test into the command line to test this program after installation.

## Questions
[My GitHub](github.com/outOfThePark)
For any questions, feel free to email me at [redacted].
    `,
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
