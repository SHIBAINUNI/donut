import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const DOUGH_ADDRESS: AddressMap = constructSameAddressMap('0x3716d2f01b98b82823e6d1b9a5042c8a287ef7ef')
export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x3716D2f01b98B82823e6d1B9a5042C8A287Ef7EF', [
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.OPTIMISM,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.THUNDERCORE,
    SupportedChainId.POLYGON,
    SupportedChainId.BINANCE,
    SupportedChainId.HARMONY,
    SupportedChainId.FANTOM,
  ]),
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
}

export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)

export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7f2f2570ad2c9a1835745AfD8fc8cc73517FA1cE')
export const V3_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7f2f2570ad2c9a1835745AfD8fc8cc73517FA1cE', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.THUNDERCORE,
  SupportedChainId.BINANCE,
  SupportedChainId.HARMONY,
  SupportedChainId.FANTOM,
])
export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap('0x7f2f2570ad2c9a1835745AfD8fc8cc73517FA1cE', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.THUNDERCORE,
  SupportedChainId.BINANCE,
  SupportedChainId.HARMONY,
  SupportedChainId.FANTOM,
])

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5F83a49aC970f3Cc58f1eca3F0a27fFE20f8299E'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x96e272d65EAe9b18470B1f4425278C7abB6D5f88')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V3_FACTORY_ADDRESS, [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.POLYGON,
  SupportedChainId.THUNDERCORE,
  SupportedChainId.BINANCE,
  SupportedChainId.HARMONY,
  SupportedChainId.FANTOM,
])
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.POLYGON,
  SupportedChainId.THUNDERCORE,
  SupportedChainId.BINANCE,
  SupportedChainId.HARMONY,
  SupportedChainId.FANTOM,
])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x4B5EE301DC26d9e6233EC0ffa78442D2DD7DaA0c',
  [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
    SupportedChainId.THUNDERCORE,
    SupportedChainId.BINANCE,
    SupportedChainId.HARMONY,
    SupportedChainId.FANTOM,
  ]
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.BINANCE]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.HARMONY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.THUNDERCORE]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.FANTOM]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.POLYGON,
  SupportedChainId.THUNDERCORE,
  SupportedChainId.POLYGON,
  SupportedChainId.BINANCE,
  SupportedChainId.HARMONY,
  SupportedChainId.FANTOM,
])

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.ARBITRUM_ONE]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
}
