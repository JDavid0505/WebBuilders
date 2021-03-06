<?php
	define('PAGE','consultarUsuariosPacientes');
	define('TITLE','Consultar Usuarios');
	$pageConfig = array(
		'plugins'=> array('datatable')
	);
	require_once 'includes/functions.php';
	require_once 'includes/header.php';
?>
	<h1 class="ac">Consultar Usuarios</h1>
	<?php if( check_permission( 'crearUsuarioPaciente' ) ) : ?>
		<div id="add-user">
			<a class="fr" href="crear-usuario-paciente.php">+ agregar usuario</a>
		</div>
	<?php endif; ?>
	<table class="data-table display">
		<thead>
			<tr>
				<th>Nombre de Usuario</th>
				<th>Identificación</th>
				<th>Rol</th>
				<th>Teléfonos</th>
				<th>Correo</th>
				<th>Dirección</th>
				<?php if( check_permission( 'editarUsuarioPaciente' ) ) : ?>
					<th class="column-icons"></th>
				<?php endif; ?>
			</tr>
		</thead>
		<tbody>
			<?php display_usuarios_secretaria_rows(); ?>
		</tbody>
	</table>
<?php
	require_once 'includes/footer.php';
?>