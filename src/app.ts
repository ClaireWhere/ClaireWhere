import * as fs from 'fs';
import markdownit from 'markdown-it';
const md = markdownit({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
});
import { fetchGitHubData } from "./fetchGitHubData"

const githubUsername = 'ClaireWhere'
const websiteUrl = 'https://www.clairewhere.com'
const youtubeUrl = 'https://youtube.com/@ClaireWhere'
const twitchUrl = 'https://twitch.tv/ClaireWhere'
const discordUrl = 'https://discord.com/users/clairewhere'
const badgeColor = 'D1A3FF'
const textColor = 'black'

const developmentProjectRepos = [
    "gsabot"
];
const releasedProjectRepos = [

]
const learningMaterialRepos = [
    "AutomatedREADME"
];


async function generateMarkdown() {
    const websiteBadge = ``
        + `<a href=${websiteUrl}>`
        + `<img src="https://img.shields.io/badge/-Website-${badgeColor}?style=for-the-badge&logo=amp&logoColor=${textColor}" alt="Website Badge">`
        + `</a>`;
    const youtubeBadge = ``
        + `<a href=${youtubeUrl}>`
        + `<img src="https://img.shields.io/badge/-Youtube-${badgeColor}?style=for-the-badge&logo=Youtube&logoColor=${textColor}" alt="YouTube Badge">`
        + `</a>`;
    const twitchBadge = ``
        + `<a href=${twitchUrl}>`
        + `<img src="https://img.shields.io/badge/-Twitch-${badgeColor}?style=for-the-badge&logo=Twitch&logoColor=${textColor}" alt="Twitch Badge">`
        + `</a>`;
    const discordBadge = ``
        + `<a href=${discordUrl}>`
        + `<img src="https://img.shields.io/badge/-Discord-${badgeColor}?style=for-the-badge&logo=Discord&logoColor=${textColor}" alt="Discord Badge">`
        + `</a>`;
    const profileCountBadge = ``
        + `<img src="https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge" alt="Profile Views Count Badge">`;

    const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
    const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

    let markdownText = ``
        + `<div align="center">\n`
        + `${websiteBadge} ${youtubeBadge} ${twitchBadge} ${discordBadge} ${profileCountBadge}\n\n`
        + `---\n\n`
        + `Hello friends! I'm a beginner software developer currently learning everything I can :D I'm always working on a few projects at a time and always trying to learn something new and improve my skills. I take a very positive approach to software development and believe every creation has value. Get out there and make something! 💖\n\n`
        + `---\n\n`
        + `${githubStatsCardDark}\n${githubStatsCardLight}\n`
        + `</div>\n\n`
        + `---\n\n## Highlights\n\n`
        + `<details>\n`
        + `<summary>Projects in Development</summary>`
        + `<br />Here are some of the projects I'm currently working on:\n`
        + `<br />\n<br />`
        + `${await fetchGitHubData(developmentProjectRepos)}\n`
        + `</details>\n`
        + `<details>\n`
        + `<summary>Released Projects</summary>`
        + `<br />Here are some of the completed projects I've released:\n`
        + `<br />\n<br />`
        + `nothing here sobbing emoji\n`
        + `</details>\n`
        + `<details>\n`
        + `<summary>Learning Materials</summary>\n`
        + `<br />`
        + `Here are some of the learning resources I've created:\n`
        + `<br />\n<br />`
        + `${await fetchGitHubData(learningMaterialRepos)}\n`
        + `</details>\n`
        + `<details>\n`
        + `<summary>Extra Info</summary>\n\n`
        + `- ⭐️ Pronouns: She/Her\n`
        + `- 💬 How to reach me: DM me [@clairewhere](https://discord.com/users/clairewhere) on Discord\n`
        + `- 🌱 I'm currently (always) learning: C#, Java, JavaScript, Python, TypeScript, and more!\n`
        + `</details>\n\n`
        + `---\n\n`
        + `<a href="https://github.com/ClaireWhere/AutomatedREADME/actions/workflows/build.yml"><img src="https://github.com/ClaireWhere/AutomatedREADME/actions/workflows/build.yml/badge.svg" align="right" alt="Rebuild README.md file"></a>\n`
        + `<div align="center">\n`
        + `<a href="https://github.com/ClaireWhere" target="_blank" rel="noopener noreferrer">💖</a>\n`
        + `</div>`;

    const result = md.render(markdownText);

    fs.writeFile('README.md', result, (error: any) => {
        if (error) throw new Error(`There was an error writing to the README.md file: ${error}`);
        console.log('README.md file has been written to successfully!');
    });
}

generateMarkdown();