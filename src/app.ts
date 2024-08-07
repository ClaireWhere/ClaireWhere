import * as fs from 'fs';
import markdownit from 'markdown-it';
const md = markdownit({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
});
import { fetchGitHubData } from "./fetchGitHubData";
import { config } from "./config"


async function generateMarkdown() {
    const websiteBadge = ``
        + `<a href=${config.websiteURL}>`
        + `<img src="https://img.shields.io/badge/-Website-${config.badgeColor}?style=for-the-badge&logo=amp&logoColor=${config.textColor}" alt="Website Badge">`
        + `</a>`;
    const youtubeBadge = ``
        + `<a href=${config.youtubeURL}>`
        + `<img src="https://img.shields.io/badge/-Youtube-${config.badgeColor}?style=for-the-badge&logo=Youtube&logoColor=${config.textColor}" alt="YouTube Badge">`
        + `</a>`;
    const twitchBadge = ``
        + `<a href=${config.twitchURL}>`
        + `<img src="https://img.shields.io/badge/-Twitch-${config.badgeColor}?style=for-the-badge&logo=Twitch&logoColor=${config.textColor}" alt="Twitch Badge">`
        + `</a>`;
    const discordBadge = ``
        + `<a href=${config.discordURL}>`
        + `<img src="https://img.shields.io/badge/-Discord-${config.badgeColor}?style=for-the-badge&logo=Discord&logoColor=${config.textColor}" alt="Discord Badge">`
        + `</a>`;
    const profileCountBadge = ``
        + `<img src="https://komarev.com/ghpvc/?username=${config.githubUsername}&style=for-the-badge" alt="Profile Views Count Badge">`;

    const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${config.githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${config.githubUsername}/${config.githubUsername}#gh-dark-mode-only)`;
    const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${config.githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${config.githubUsername}/${config.githubUsername}#gh-light-mode-only)`;

    const metricsBasic = `<img src="metrics.basic.svg" alt="Basic profile metrics"/>`;
    const metricsFollowup = `<img src="metrics.followup.svg" alt="Followup profile metrics"/>`;
    const metricsLanguages = `<img src="metrics.languages.svg" alt="Languages profile metrics"/>`;

    const developmentProjectDisplay = config.developmentProjectRepos.length === 0 ? `` : ``
        + `<details>\n`
        + `<summary>Projects in Development</summary>\n`
        + `<br />These are some projects I'm currently working on. Some of them may never be completed, but I like to keep them because they're good memories.\n`
        + `<br />\n<br />`
        + `${await fetchGitHubData(config.developmentProjectRepos)}\n`
        + `</details>\n`;
    const releasedProjectDisplay = config.releasedProjectRepos.length === 0 ? `` : ``
        + `<details>\n`
        + `<summary>Released Projects</summary>\n`
        + `<br />These are some projects I've "completed" (whatever that means). Basically, these ones have the potential to work!\n`
        + `<br />\n<br />`
        + `${await fetchGitHubData(config.releasedProjectRepos)}\n`
        + `</details>\n`;
    const learningMaterialDisplay = config.learningMaterialRepos.length === 0 ? `` : ``
        + `<details>\n`
        + `<summary>Learning Materials</summary>\n`
        + `<br />`
        + `Here are some of the learning and other resources I've created:\n`
        + `<br />\n<br />`
        + `${await fetchGitHubData(config.learningMaterialRepos)}\n`
        + `</details>\n`;
    

    let markdownText = ``
        + `<div align="center">\n`
        + `${websiteBadge} ${youtubeBadge} ${twitchBadge} ${discordBadge} ${profileCountBadge}\n\n`
        + `---\n\n`
        + `Hello friends! I love to work on fun little projects to learn more about software development and improve my skills. I love learning and exercising my creativity and take a very positive approach to life. I believe everything has value! Fun fact: I *enjoy* making diagrams and writing documentation - call me crazy if you want. Oh also I love bread 🍞💖\n\n`
        + `---\n\n`
        + `${metricsBasic} ${metricsFollowup} ${metricsLanguages}\n`
        + `</div>\n\n`
        + `---\n\n## Highlights\n\n`
        + developmentProjectDisplay
        + releasedProjectDisplay
        + learningMaterialDisplay
        + `<details>\n`
        + `<summary>Extra Info</summary>\n\n`
        + `- ⭐️ Pronouns: She/Her\n`
        + `- 💬 DM me [@${config.discordUsername}](${config.discordURL}) on Discord if you wanna talk to me\n`
        + `- 🌱 The first programming language I used extensively was TI-BASIC which I learned to make goofy little games and programs on my calculators. By now I've moved on to more modern languages :p\n`
        + `</details>\n\n`
        + `---\n\n`
        + `<a href="https://github.com/${config.githubUsername}/${config.githubUsername}/actions/workflows/build.yml"><img src="https://github.com/${config.githubUsername}/${config.githubUsername}/actions/workflows/build.yml/badge.svg" align="right" alt="Rebuild README.md file"></a>\n`
        + `<div align="center">\n`
        + `<a href="https://github.com/${config.githubUsername}" target="_blank" rel="noopener noreferrer">💖</a>\n`
        + `</div>`;

    const result = md.render(markdownText);

    fs.writeFile('README.md', result, (error: any) => {
        if (error) throw new Error(`There was an error writing to the README.md file: ${error}`);
        console.log('README.md file has been written to successfully!');
    });
}

generateMarkdown();
