'use server'
import { db } from '@/lib/mysql'
import { revalidatePath } from 'next/cache';

export async function getProductos(query) {
  try {
    const sql = 'select * from `productos` where nombre like ?';
    const values = [`%${query}%`]
    const [rows] = await db.query(sql, values);

    // console.log(rows)
    return rows;

  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getProductoById(id) {
  try {
    const sql = 'select * from productos where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // console.log(rows)
    return rows;

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createProducto(formData) {
  const nombre = formData.get('nombre');
  const descripcion = formData.get('descripcion');
  const precio = formData.get('precio');

  try {
    const sql = 'insert into `productos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?)'
    const values = [nombre, descripcion, precio];

    const [result, fields] = await db.query(sql, values)

    // console.log(result);

  } catch (error) {
    console.log(error);
  }
  revalidatePath('/productos');
}


export async function updateProducto(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const sql = 'update `productos` set `nombre` = ?, `descripcion` = ?, `precio` = ? where `id` = ?'
    const values = [nombre, descripcion, precio, id];

    const [result, fields] = await db.query(sql, values)

    // console.log(result);

  } catch (error) {
    console.log(error);
  }
  revalidatePath('/productos');
}

export async function deleteProducto(formData) {
  const id = formData.get('id');

  try {
    const sql = 'delete from productos where id = ?'
    const values = [id]

    const [result, fields] = await db.query(sql, values);

    // console.log(result);

  } catch (error) {
    console.log(error);
  }
  revalidatePath('/productos');
}