products = %i(机 本棚 フライパン コップ 参考書)
products.each do |product|
  Product.create(name: product)
end