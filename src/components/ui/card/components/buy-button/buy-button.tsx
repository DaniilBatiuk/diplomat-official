import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { ICONS } from '@/utils/config/icons'

export const BuyButton: React.FC = () => {
  return <CustomButton onClick={e => e.preventDefault()}>{ICONS.buy()}</CustomButton>
}
