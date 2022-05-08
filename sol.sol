# Palkeoramix decompiler. 

def storage:
  stor0 is addr at storage 0
  stor1 is addr at storage 1

def kill() payable: 
  if stor0 != tx.origin:
      revert with 0, 'x'
  selfdestruct(stor0)

def _fallback() payable: # default function
  stop

def withdraw() payable: 
  if stor0 != tx.origin:
      revert with 0, 'x'
  call stor0 with:
     value eth.balance(this.address) wei
       gas 2300 * is_zero(value) wei
  if not ext_call.success:
      revert with ext_call.return_data[0 len return_data.size]

def unknownb1a94c1e(addr _param1) payable: 
  require calldata.size - 4 >= 32
  if stor0 != tx.origin:
      revert with 0, 'x'
  mem[132 len 0] = None
  delegate _param1.mem[132 len 4] with:
       gas gas_remaining wei
      args 

def unknownf9d7cec7() payable: 
  if stor0 != tx.origin:
      revert with 0, 'x'
  require ext_code.size(stor1)
  call stor1.0xf9d7cec7 with:
       gas gas_remaining wei
  if not ext_call.success:
      revert with ext_call.return_data[0 len return_data.size]
  call caller with:
     value eth.balance(this.address) wei
       gas 2300 * is_zero(value) wei

def a(uint256 _param1, uint256 _param2) payable: 
  require calldata.size - 4 >= 64
  if stor0 != tx.origin:
      revert with 0, 'x'
  require ext_code.size(stor1)
  call stor1.play(uint256 ticketReveal) with:
     value _param2 + _param1 wei
       gas gas_remaining wei
      args _param1
  if not ext_call.success:
      revert with ext_call.return_data[0 len return_data.size]
  require return_data.size >= 32
  call caller with:
     value eth.balance(this.address) wei
       gas 2300 * is_zero(value) wei
  if not ext_call.success:
      revert with ext_call.return_data[0 len return_data.size]