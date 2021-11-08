<?php

class Price {
    public function get($group)
    {
        $result = ($group == 'general' ? 20000000 : ($group == 'distributor' ? 1000000 : 0));

        return $result;
    }
}

class Customer {

    public $group;

    public $status;

    public $debt;

}

class Test {

    public function getPrice($cs, $cd, $cg) {

        if ($cs != 'active') return 'this customer is not active';

        if ($cd > 10000000) return 'this customer cannot make a purchase due to his debt over limit';

        return Price::get($cg);
    }

}

$customer = new Customer();
$customer->debt = 10000000;
$customer->status = 'active';
$customer->group = 'general';

$test = new Test();

echo $test->getPrice($customer->status, $customer->debt, $customer->group);