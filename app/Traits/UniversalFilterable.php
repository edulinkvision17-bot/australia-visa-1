<?php

namespace App\Traits;

use Illuminate\Support\Facades\Schema;


trait UniversalFilterable {
    public function scopeFilter($query, $filters) {
        if (!$filters) return $query;

        foreach ($filters as $key => $value) {
            if ($value === null || $value === '') continue;

            if ($this->isStringColumn($key)) {
                $query->where($key, 'like', "%{$value}%");
                continue;
            }

            $query->where($key, $value);
        }

        return $query;
    }

    protected function isStringColumn($column) {
        try {
            $type = Schema::getColumnType($this->getTable(), $column);
            return in_array($type, ['string', 'text', 'varchar']);
        } catch (\Exception $e) {
            return false;
        }
    }
}
