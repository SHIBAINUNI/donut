import { Currency, Ether, NativeCurrency, Token, WETH9 } from '@uniswap/sdk-core'
import invariant from 'tiny-invariant'

import { DOUGH_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const USDC_MAINNET = new Token(
  SupportedChainId.MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD//C'
)
export const USDC_BINANCE = new Token(
  SupportedChainId.BINANCE,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'USD//C'
)
export const USDC_ROPSTEN = new Token(
  SupportedChainId.ROPSTEN,
  '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
  6,
  'USDC',
  'USD//C'
)
export const USDC_RINKEBY = new Token(
  SupportedChainId.RINKEBY,
  '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
  6,
  'tUSDC',
  'test USD//C'
)
export const USDC_GOERLI = new Token(
  SupportedChainId.GOERLI,
  '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
  6,
  'USDC',
  'USD//C'
)
export const USDC_KOVAN = new Token(
  SupportedChainId.KOVAN,
  '0x31eeb2d0f9b6fd8642914ab10f4dd473677d80df',
  6,
  'USDC',
  'USD//C'
)
export const USDC_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  6,
  'USDC',
  'USD//C'
)
export const USDC_OPTIMISTIC_KOVAN = new Token(
  SupportedChainId.OPTIMISTIC_KOVAN,
  '0x3b8e53b3ab8e01fb57d0c9e893bc4d655aa67d84',
  6,
  'USDC',
  'USD//C'
)
export const USDC_ARBITRUM = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  6,
  'USDC',
  'USD//C'
)
export const USDC_ARBITRUM_RINKEBY = new Token(
  SupportedChainId.ARBITRUM_RINKEBY,
  '0x09b98f8b2395d076514037ff7d39a091a536206c',
  6,
  'USDC',
  'USD//C'
)
export const USDC_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  6,
  'USDC',
  'USD//C'
)
export const USDC_HARMONY = new Token(
  SupportedChainId.HARMONY,
  '0x985458e523db3d53125813ed68c274899e9dfab4',
  6,
  'USDC',
  'USD//C'
)
export const USDC_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  6,
  'USDC',
  'USD//C'
)
export const USDC_POLYGON_MUMBAI = new Token(
  SupportedChainId.POLYGON_MUMBAI,
  '0xe11a86849d99f524cac3e7a0ec1241828e332c62',
  6,
  'USDC',
  'USD//C'
)
export const DOUGH_BINANCE = new Token(
  SupportedChainId.BINANCE,
  '0x2f8874d3f92d6d4b52d36e0523e627d70f66b447',
  9,
  'DOUGH',
  'Doughnutswap'
)
export const DOUGH_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x3716D2f01b98B82823e6d1B9a5042C8A287Ef7EF',
  9,
  'DOUGH',
  'Doughnutswap'
)
export const JELLY_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x3D3270E9642E2cF8AE5c3af7f79F63Bb9353F329',
  9,
  'JELLY',
  'Jelly Pool'
)
export const TRUSD_BINANCE = new Token(
  SupportedChainId.BINANCE,
  '0x9f8462efb1ac6e62f4ebb031afbb7932ba71d05f',
  18,
  'TRUSD',
  'Trust_Dollar'
)
export const TRUSD_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0xd17628b62647dfbd5f1b05dab045ff2823213205',
  18,
  'TRUSD',
  'Trust_Dollar'
)
export const TRUSD_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x8ba03ce31f71c6733b0764ce82f3c68d4f6173fa',
  18,
  'TRUSD',
  'Trust_Dollar'
)
export const USDa_BINANCE = new Token(
  SupportedChainId.BINANCE,
  '0x16EE8F5Fa3D8F6e6C11BB7C0908a0c9E6a6d8e98',
  9,
  'USDA',
  'USDa_Stable_Dollar'
)
export const JELLY_BINANCE = new Token(
  SupportedChainId.BINANCE,
  '0x39D37f6A0b48dB68E3C5738e88f43A833C5Fd638',
  9,
  'JELLY',
  'Jelly Pool'
)
export const DOUGH_HARMONY = new Token(
  SupportedChainId.HARMONY,
  '0x302aE52359a5950d97c8e39e763C0706877C4Fa3',
  9,
  'DOUGH',
  'Doughnutswap'
)
export const DOUGH_THUNDERCORE = new Token(
  SupportedChainId.THUNDERCORE,
  '0xd17628B62647dFbd5f1b05dab045fF2823213205',
  9,
  'DOUGH',
  'Doughnutswap'
)
export const DOUGH_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x4EC22A90b899528156B262e1aF80eBc3f5D7e611',
  9,
  'DOUGH',
  'Doughnutswap'
)
export const AMPL = new Token(
  SupportedChainId.MAINNET,
  '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  9,
  'AMPL',
  'Ampleforth'
)
export const DAI = new Token(
  SupportedChainId.MAINNET,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const DAI_ARBITRUM_ONE = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const DAI_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const USDC: { [chainId in SupportedChainId]: Token } = {
  [SupportedChainId.MAINNET]: USDC_MAINNET,
  [SupportedChainId.ARBITRUM_ONE]: USDC_ARBITRUM,
  [SupportedChainId.OPTIMISM]: USDC_OPTIMISM,
  [SupportedChainId.ARBITRUM_RINKEBY]: USDC_ARBITRUM_RINKEBY,
  [SupportedChainId.OPTIMISTIC_KOVAN]: USDC_OPTIMISTIC_KOVAN,
  [SupportedChainId.POLYGON]: USDC_POLYGON,
  [SupportedChainId.POLYGON_MUMBAI]: USDC_POLYGON_MUMBAI,
  [SupportedChainId.GOERLI]: USDC_GOERLI,
  [SupportedChainId.RINKEBY]: USDC_RINKEBY,
  [SupportedChainId.KOVAN]: USDC_KOVAN,
  [SupportedChainId.ROPSTEN]: USDC_ROPSTEN,
  [SupportedChainId.COINEX]: USDC_COINEX,
  [SupportedChainId.BINANCE]: USDC_BINANCE,
  [SupportedChainId.HECO]: USDC_HECO,
  [SupportedChainId.HARMONY]: USDC_HARMONY,
  [SupportedChainId.FANTOM]: USDC_FANTOM,
  [SupportedChainId.AVALANCHE]: USDC_AVALANCHE,
  [SupportedChainId.GNOSIS]: USDC_GNOSIS,
}
export const DAI_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDT_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  6,
  'USDT',
  'Tether USD'
)
export const WBTC_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const USDT = new Token(
  SupportedChainId.HARMONY,
  '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
  6,
  'USDT',
  'Tether USD'
)
export const USDT = new Token(
  SupportedChainId.FANTOM,
  '0x049d68029688eabf473097a2fc38ef61633a3c7a',
  6,
  'USDT',
  'Tether USD'
)
export const USDT = new Token(
  SupportedChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
)
export const USDT = new Token(
  SupportedChainId.BINANCE,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD'
)
export const USDT_ARBITRUM_ONE = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  6,
  'USDT',
  'Tether USD'
)
export const USDT_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
  6,
  'USDT',
  'Tether USD'
)
export const WBTC = new Token(
  SupportedChainId.MAINNET,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const WBTC_ARBITRUM_ONE = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const WBTC_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const FEI = new Token(
  SupportedChainId.MAINNET,
  '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
  18,
  'FEI',
  'Fei USD'
)
export const TRIBE = new Token(
  SupportedChainId.MAINNET,
  '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
  18,
  'TRIBE',
  'Tribe'
)
export const FRAX = new Token(
  SupportedChainId.MAINNET,
  '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  18,
  'FRAX',
  'Frax'
)
export const FXS = new Token(
  SupportedChainId.MAINNET,
  '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
  18,
  'FXS',
  'Frax Share'
)
export const renBTC = new Token(
  SupportedChainId.MAINNET,
  '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  8,
  'renBTC',
  'renBTC'
)
export const ETH2X_FLI = new Token(
  SupportedChainId.MAINNET,
  '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
  18,
  'ETH2x-FLI',
  'ETH 2x Flexible Leverage Index'
)
export const sETH2 = new Token(
  SupportedChainId.MAINNET,
  '0xFe2e637202056d30016725477c5da089Ab0A043A',
  18,
  'sETH2',
  'StakeWise Staked ETH2'
)
export const rETH2 = new Token(
  SupportedChainId.MAINNET,
  '0x20BC832ca081b91433ff6c17f85701B6e92486c5',
  18,
  'rETH2',
  'StakeWise Reward ETH2'
)
export const SWISE = new Token(
  SupportedChainId.MAINNET,
  '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2',
  18,
  'SWISE',
  'StakeWise'
)
export const WETH_POLYGON_MUMBAI = new Token(
  SupportedChainId.POLYGON_MUMBAI,
  '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa',
  18,
  'WETH',
  'Wrapped Ether'
)

export const WETH_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  18,
  'WETH',
  'Wrapped Ether'
)
export const USDT: { [chainId: number]: Token } = {
  [SupportedChainId.MAINNET]: new Token(SupportedChainId.MAINNET, USDT_ADDRESS[1], 18, 'USDT', Doughnutswap),
  [SupportedChainId.RINKEBY]: new Token(SupportedChainId.RINKEBY, USDT_ADDRESS[4], 18, 'USDT', Doughnutswap),
  [SupportedChainId.ROPSTEN]: new Token(SupportedChainId.ROPSTEN, USDT_ADDRESS[3], 18, 'USDT', Doughnutswap),
  [SupportedChainId.GOERLI]: new Token(SupportedChainId.GOERLI, USDT_ADDRESS[5], 18, 'USDT', Doughnutswap),
  [SupportedChainId.KOVAN]: new Token(SupportedChainId.KOVAN, USDT_ADDRESS[42], 18, 'USDT', Doughnutswap),
  [SupportedChainId.HARMONY]: new Token(SupportedChainId.HARMONY, USDT_ADDRESS[1666600000], 6, 'USDT', Doughnutswap),
  [SupportedChainId.BINANCE]: new Token(SupportedChainId.BINANCE, USDT_ADDRESS[56], 18, 'USDT', Doughnutswap),
  [SupportedChainId.THUNDERCORE]: new Token(SupportedChainId.THUNDERCORE, USDT_ADDRESS[108], 18, 'USDT', Doughnutswap),
  [SupportedChainId.FANTOM]: new Token(SupportedChainId.FANTOM, USDT_ADDRESS[250], 18, 'USDT', Doughnutswap),
}

export const WRAPPED_NATIVE_CURRENCY: { [chainId: number]: Token | undefined } = {
  ...(WETH9 as Record<SupportedChainId, Token>),
  [SupportedChainId.OPTIMISM]: new Token(
    SupportedChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.OPTIMISTIC_KOVAN]: new Token(
    SupportedChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.ARBITRUM_ONE]: new Token(
    SupportedChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.ARBITRUM_RINKEBY]: new Token(
    SupportedChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.POLYGON]: new Token(
    SupportedChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),
  [SupportedChainId.HARMONY]: new Token(
    SupportedChainId.HARMONY,
    '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [SupportedChainId.THUNDERCORE]: new Token(
    SupportedChainId.THUNDERCORE,
    '0x413cEFeA29F2d07B8F2acFA69d92466B9535f717',
    18,
    'wTT',
    'Wrapped Thunder Token'
  ),
  [SupportedChainId.BINANCE]: new Token(
    SupportedChainId.BINANCE,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [SupportedChainId.FANTOM]: new Token(
    SupportedChainId.FANTOM,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WFTM',
    'Wrapped FTM'
  ),
}

function isMatic(chainId: number): chainId is SupportedChainId.POLYGON | SupportedChainId.POLYGON_MUMBAI {
  return chainId === SupportedChainId.POLYGON_MUMBAI || chainId === SupportedChainId.POLYGON
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isMatic(this.chainId)) throw new Error('Not matic')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) throw new Error('Not matic')
    super(chainId, 18, 'MATIC', 'Polygon Matic')
  }
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    if (wrapped) return wrapped
    throw new Error('Unsupported chain ID')
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedExtendedEther[chainId] ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {}
export function nativeOnChain(chainId: number): NativeCurrency {
  return (
    cachedNativeCurrency[chainId] ??
    (cachedNativeCurrency[chainId] = isMatic(chainId)
      ? new MaticNativeCurrency(chainId)
      : ExtendedEther.onChain(chainId))
  )
}

export const TOKEN_SHORTHANDS: { [shorthand: string]: { [chainId in SupportedChainId]?: string } } = {
  USDC: {
    [SupportedChainId.MAINNET]: USDC_MAINNET.address,
    [SupportedChainId.BINANCE]: USDC_BINANCE.address,
    [SupportedChainId.FANTOM]: USDC_FANTOM.address,
    [SupportedChainId.AVALANCHE]: USDC_AVALANCHE.address,
    [SupportedChainId.HUOBI]: USDC_HUOBI.address,
    [SupportedChainId.COINEX]: USDC_COINEX.address,
    [SupportedChainId.HARMONY]: USDC_HARMONY.address,
    [SupportedChainId.CELO]: USDC_CELO.address,
    [SupportedChainId.MOONRIVER]: USDC_MOONRIVER.address,
    [SupportedChainId.THUNDERCORE]: USDC_THUNDERCORE.address,
    [SupportedChainId.ARBITRUM_ONE]: USDC_ARBITRUM.address,
    [SupportedChainId.OPTIMISM]: USDC_OPTIMISM.address,
    [SupportedChainId.ARBITRUM_RINKEBY]: USDC_ARBITRUM_RINKEBY.address,
    [SupportedChainId.OPTIMISTIC_KOVAN]: USDC_OPTIMISTIC_KOVAN.address,
    [SupportedChainId.POLYGON]: USDC_POLYGON.address,
    [SupportedChainId.POLYGON_MUMBAI]: USDC_POLYGON_MUMBAI.address,
    [SupportedChainId.GOERLI]: USDC_GOERLI.address,
    [SupportedChainId.RINKEBY]: USDC_RINKEBY.address,
    [SupportedChainId.KOVAN]: USDC_KOVAN.address,
    [SupportedChainId.ROPSTEN]: USDC_ROPSTEN.address,
  },
}
