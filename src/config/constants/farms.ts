import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'NSFD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xd88a7b026e8a72f5d66c95ac1bca55d3a5a1e8e1',
    },
    tokenSymbol: 'NSFD',
    tokenAddresses: {
      97: '',
      56: '0x04958ceb50f40ed25f0b250f66b51fc4f820f6c7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'NSFD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xFf9f51bCdC473b33E728a5bba6D5aE5f15A6548e',
    },
    tokenSymbol: 'NSFD',
    tokenAddresses: {
      97: '',
      56: '0x04958ceb50f40ed25f0b250f66b51fc4f820f6c7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'NSFD',
    lpAddresses: {
      97: '',
      56: '0xd88a7b026e8a72f5d66c95ac1bca55d3a5a1e8e1', // NSFD-BUSD LP
    },
    tokenSymbol: 'NSFD',
    tokenAddresses: {
      97: '',
      56: '0x04958ceb50f40ed25f0b250f66b51fc4f820f6c7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
