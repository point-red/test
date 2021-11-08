# Task 3

#### 1. Create simple CRUD API using nodejs / expressjs

`database table = user`

```
name => varchar / string | required
email => varchar / string | unique
age => integer / number | optional
```

#### 2. Implement data validation in middleware (rules of table column see database structure above), we should receive error code 422 when data validation not passed

```php
  
  ///User Model
  class User extends Authenticatable
  {
	  protected $table = 'user';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	  protected $fillable = [
		  'name', 'email', 'age'
	  ];
  }
  
  //View(Read)
  public function index()
	{
		try {
			$data = User::all();

			return response()->json($data, 200);
		} catch (\Throwable $th) {
			return response()->json($data, 500);
		}
	}
  
  ///Create
  public function store(Request $request)
	{
		$this->validate($request, [
			'name' => 'required|string',
			'email' => 'required|unique',
      'age' => 'required|number
		]);

		DB::beginTransaction();
		try {
			$data = User::create([
				'name' => $request->name,
				'email' => $request->email,
				'age' => $request->age,
			]);
      
			DB::commit();
			return response()->json('Berhasil Input Data', 200);
		} catch (\Throwable $th) {
			DB::rollBack();
			DB::commit();
			return response()->json($this->error($th->getMessage()), 400);
		}
	}
  
  ///Update
  public function update(Request $request)
	{
		$this->validate($request, [
			'name' => 'required|string',
			'email' => 'required|unique',
      'age' => 'required|number
		]);

		DB::beginTransaction();
		try {
			$data = User::where('id', $request->id)->update([
				'name' => $request->name,
				'email' => $request->email,
				'age' => $request->age,
			]);
      
			DB::commit();
			return response()->json('Update Data Berhasil', 200);
		} catch (\Throwable $th) {
			DB::rollBack();
			DB::commit();
			return response()->json($this->error($th->getMessage()), 400);
		}
	}
  
  ///Delete
  public function destroy(Request $request)
	{
		$this->validate($request, [
			'id' => 'required',
		]);

		DB::beginTransaction();
		try {
			$data = User::find($request->id)->delete();
      
			DB::commit();
			return response()->json('Data Berhasil di Hapus', 200);
		} catch (\Throwable $th) {
			DB::rollBack();
			DB::commit();
			return response()->json($this->error($th->getMessage()), 400);
		}
	}
  
```


#### 3. Make a pull request 
```
- readme.md
- task1.md
- task2.md
- task3.md
- task4.md
- task3-folder # put your project here
```
