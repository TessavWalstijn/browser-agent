import { Command } from 'commander'
import pjson from '../package.json' assert { type: 'json' }
import { getTotalUserAgents, isUserAgentIndexed } from './browsers/index.js'

const program = new Command()

program
  .name(pjson.name)
  .description(pjson.description)
  .version(pjson.version, '-v, --version')

program
  .command('checkUserAgent')
  .arguments('<userAgent>')
  .description('Returns userAgent information and if it is indexed')
  .action(async (userAgent: string) => {
    console.log(`Browser information: `, isUserAgentIndexed(userAgent))
  })

program
  .command('getTotalUserAgents')
  .description(`gets total userAgent's that are indexed`)
  .action(async () => {
    console.log(
      `Total userAgent's recorded in package: ${getTotalUserAgents()}`,
    )
  })

program.parse()
